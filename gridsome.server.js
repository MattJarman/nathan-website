const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Collection Types
    const photos = await axios.get(`${process.env.STRAPI_URL}/photos`)
    const videos = await axios.get(`${process.env.STRAPI_URL}/videos`)
    const skills = await axios.get(`${process.env.STRAPI_URL}/skills`)
    const experiences = await axios.get(`${process.env.STRAPI_URL}/experiences`)
    const socials = await axios.get(`${process.env.STRAPI_URL}/socials`)

    // Single types
    const about = await axios.get(`${process.env.STRAPI_URL}/about`)
    const site = await axios.get(`${process.env.STRAPI_URL}/site`)

    const videoCollection = addCollection({
      typeName: 'videos'
    })

    const photoCollection = addCollection({
      typeName: 'photos'
    })

    const skillCollection = addCollection({
      typeName: 'skills'
    })

    const experiencesCollection = addCollection({
      typeName: 'experience'
    })

    const socialsCollection = addCollection({
      typeName: 'socials'
    })

    const aboutCollection = addCollection({
      typeName: 'about'
    })

    const siteCollection = addCollection({
      typeName: 'site'
    })

    for (const item of photos.data) {
      let smallUrl = item.image.formats.small.url
      let originalUrl = item.image.url
      if (process.env.STRAPI_URL.includes('localhost')) {
        smallUrl = `${process.env.STRAPI_URL}${smallUrl}`
        originalUrl = `${process.env.STRAPI_URL}${originalUrl}`
      }

      photoCollection.addNode({
        id: item.id,
        name: item.Name,
        order: item.order ?? Number.MAX_SAFE_INTEGER,
        published: item.published_at,
        formats: {
          original: {
            url: originalUrl,
            width: item.image.width,
            height: item.image.height
          },
          small: {
            url: smallUrl,
            width: item.image.formats.small.width,
            height: item.image.formats.small.height
          }
        }
      })
    }

    for (const item of videos.data) {
      videoCollection.addNode({
        id: item.id,
        title: item.title,
        description: item.description,
        embed: item.embedURL,
        externalLink: item.externalURL,
        tags: item.tags,
        order: item.order ?? Number.MAX_SAFE_INTEGER,
        published: item.published_at
      })
    }

    for (const item of skills.data) {
      skillCollection.addNode({
        id: item.id,
        name: item.name,
        level: item.level
      })
    }

    for (const item of experiences.data) {
      experiencesCollection.addNode({
        id: item.id,
        name: item.name,
        title: item.title,
        yearEnd: item.yearEnd,
        description: item.description
      })
    }

    for (const item of socials.data) {
      socialsCollection.addNode({
        id: item.id,
        url: item.url,
        icon: item.icon
      })
    }

    let avatar = about.data.avatar.formats.thumbnail.url
    if (process.env.STRAPI_URL.includes('localhost')) {
      avatar = `${process.env.STRAPI_URL}${avatar}`
    }

    aboutCollection.addNode({
      id: about.data.id,
      description: about.data.description,
      title: about.data.title,
      avatar: avatar
    })

    siteCollection.addNode({
      id: site.data.id,
      description: site.data.description
    })
  })
}
