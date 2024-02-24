import { CONFIG } from "site.config"
import { DiscussionEmbed } from "disqus-react"
import styled from "@emotion/styled"

type Props = {
  id: string
  title: string
}

const Disqus: React.FC<Props> = ({ id, title }) => {
  return (
    <>
      <StyledWrapper id="comments">
        <DiscussionEmbed
          shortname={CONFIG.blog.title}
          config={{
            url: CONFIG.link,
            identifier: id,
            title: title,
            language: "ko",
          }}
        />
      </StyledWrapper>
    </>
  )
}

export default Disqus

const StyledWrapper = styled.div`
  margin-top: 2.5rem;
`
