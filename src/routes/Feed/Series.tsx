import React from "react"
import { useRouter } from "next/router"
import styled from "@emotion/styled"
import { useCategoriesQuery } from "src/hooks/useCategoriesQuery"
import { Emoji } from "src/components/Emoji"
import { DEFAULT_CATEGORY } from "src/constants"

type Props = {}

const Series: React.FC<Props> = () => {
  const router = useRouter()
  const data = useCategoriesQuery()

  const currentSeries = `${router.query.category || ``}` || DEFAULT_CATEGORY

  const handleOptionClick = (category: string) => {
    router.push({
      query: {
        ...router.query,
        category,
      },
    })
  }
  return (
    <StyledWrapper>
      <div className="top">
        <Emoji>🗂️</Emoji> Series
      </div>
      <div className="list">
        {Object.keys(data).map((key, idx) => (
          <a
            data-active={key === currentSeries}
            key={idx}
            onClick={() => handleOptionClick(key)}
          >
            {/* 이모티콘 제거 후 시리즈 명 출력 */}
            {/^[A-Za-z가-힣]/.test(key[0]) ? key : key.slice(3)}
            {` (${data[key]})`}
          </a>
        ))}
      </div>
    </StyledWrapper>
  )
}

export default Series

const StyledWrapper = styled.div`
  .top {
    display: none;
    padding: 0.25rem;
    margin-bottom: 0.75rem;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .list {
    display: flex;
    margin-bottom: 1.5rem;
    gap: 0.25rem;
    overflow: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    @media (min-width: 1024px) {
      display: block;
    }

    a {
      display: block;
      padding: 0.25rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.colors.gray10};
      flex-shrink: 0;
      cursor: pointer;

      :hover {
        background-color: ${({ theme }) => theme.colors.gray4};
      }
      &[data-active="true"] {
        color: ${({ theme }) => theme.colors.gray12};
        background-color: ${({ theme }) => theme.colors.gray4};

        :hover {
          background-color: ${({ theme }) => theme.colors.gray4};
        }
      }
    }
  }
`
