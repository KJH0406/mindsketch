import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      <LogoImage src="/logo.png" alt="Logo" />
      {CONFIG.blog.title}
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`

const LogoImage = styled.img`
  width: 25px;
  height: auto;
  margin-right: 5px;
`
