import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getCookie, setCookie } from "cookies-next"
import { useEffect } from "react"
import { queryKey } from "src/constants/queryKey"

type Scheme = "light" | "dark"
type SetScheme = (scheme: Scheme) => void

const useScheme = (): [Scheme, SetScheme] => {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: queryKey.scheme(),
    enabled: false,
    initialData: "light",
  })

  const scheme = data === "light" ? "light" : "dark"

  const setScheme = (scheme: "light" | "dark") => {
    setCookie("scheme", scheme)

    queryClient.setQueryData(queryKey.scheme(), scheme)
  }

  useEffect(() => {
    if (!window) return

    const scheme = getCookie("scheme")
    setScheme(scheme === "light" ? "light" : "light") // 초기 라이트 모드로 설정 고정
  }, [])

  return [scheme, setScheme]
}

export default useScheme
