import { portfolioData as staticPortfolioData } from '~/data/portfolio'

export type PortfolioData = typeof staticPortfolioData

/** Bundles static portfolio copy into the SSG payload via useAsyncData. */
export function usePortfolioData() {
  const { data } = useAsyncData<PortfolioData>(
    'portfolio',
    () => Promise.resolve(staticPortfolioData),
    { server: true, lazy: false },
  )

  return computed(() => data.value ?? staticPortfolioData)
}
