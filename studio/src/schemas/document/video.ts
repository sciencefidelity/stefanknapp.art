import { FilmProjector } from '../../components/twemoji'

export default {
  name: "video",
  title: "Video",
  type: "document",
  icon: FilmProjector,
  fields: [
    {
      name: "video",
      title: "Video",
      type: "array",
      of: [
        {
          name: "video",
          title: "Video",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "localeString"
            },
            {
              name: "mp4",
              title: "mp4 Video",
              description: "Upload a video file in .mp4 format",
              type: "file"
            },
            {
              name: "webm",
              title: "WebM Video",
              description: "Upload a video file in .webm format",
              type: "file"
            },
            {
              name: "image",
              title: "Video thumbnail",
              description: "Should be the same dimensions as the video file",
              type: "image"
            }
          ],
          preview: {
            select: {
              title: 'title.en',
              media: 'image'
            }
          }
        }
      ]
    }
  ],

  preview: {
    select: {
      title: 'Video'
    },
    prepare({ title }) {
      return {
        title: title,
        media: FilmProjector
      }
    }
  }
}
