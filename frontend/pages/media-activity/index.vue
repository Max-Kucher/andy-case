<script lang="ts" setup>
import type MediaActivityGraphqlReq from '~/@types/Requests/MediaActivityGraphqlReq'
import type { MediaActivityItem } from '~/@types/MediaActivityItem'

const query = `
query MassMediaPage($pagination: PaginationArg!) {
  mediaActivityItems(sort: "id:desc", pagination: $pagination) {
    data {
      id
      attributes {
        matchedUrl
        media {
          data {
            attributes {
              url
              alternativeText
              mime
            }
          }
        }
      }
    }
    meta {
      pagination {
        page
        pageCount
      }
    }
  }
}`

const { pagination, backendPagination } = usePagination(9)

const { data } = await useAPI<MediaActivityGraphqlReq>('/graphql', {
  method: 'POST',
  body: {
    query,
    variables: {
      pagination: backendPagination,
    },
  },
  query: {
    page: 'media-activity',
  },
})

const mediaActivityItems = ref<MediaActivityItem[]>([])

watch(data, newVal => {
  if (newVal?.data.mediaActivityItems != void(0)) {
    mediaActivityItems.value = transformMediaActivityItemResponseItems(newVal.data.mediaActivityItems.data)

    pagination.pageCount = newVal.data.mediaActivityItems.meta.pagination.pageCount
  }
}, { immediate: true })

const { t } = useI18n()
</script>

<template>
  <LayoutContainer>
    <AppBreadcrumbs />

    <ListsPageTitle :title="t('mediaActivity.title')" />

    <div class="app-layout-cols lg:gap-y-5 max-small-tablet:grid max-small-tablet:grid-cols-3 max-small-tablet:gap-3 max-small-tablet:mb-10 small-tablet:mb-12">
      <NuxtLinkLocale
        v-for="mediaItem in mediaActivityItems"
        :key="`media-activity-item-${mediaItem.id}`"
        :to="mediaItem.matchedUrl"
      >
        <video
          v-if="mediaItem.media.mime === 'video/mp4'"
          controls
          :title="mediaItem.media?.alternativeText ?? ''"
        >
          <source
            :src="buildBackendImageUrl($config, mediaItem.media)"
            type="video/mp4"
          />
        </video>
        <NuxtPicture
          :src="buildBackendImageUrl($config, mediaItem.media)"
          :alt="mediaItem.media?.alternativeText ?? ''"
          sizes="100vw"
        />
      </NuxtLinkLocale>
    </div>

    <ListsPagination
      v-if="(pagination.pageCount as number) > 1"
      v-model:pagination="pagination"
    />
  </LayoutContainer>
</template>
