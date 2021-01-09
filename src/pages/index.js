import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql
    `
    query{
      wpcontent{
      page(id: "home", idType: URI){
        homeMeta{
          homePageDescription
          homePageHeaderDescription
          homePageHeaderTitle
          homePageHeaderPicture{
            imageFile{
              childImageSharp{
                fluid(quality: 100){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          homePageFeaturedArtists{
            ... on WPGraphql_Artist{
              id
              artistMeta{
                artistName
                firstName
                lastName
                profile{
                  altText
                }
              }
            }
          }
        }
      }
    }
  }
  `);
  console.log(data);
return(
  <Layout>
  <SEO title="Home" />
</Layout>
)}


export default IndexPage
