import SearchSection from './SearchSection'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-24 pt-24 pb-12" style={{minHeight: 'calc(100vh - 128px)'}}>
      <SearchSection></SearchSection>
    </main>
  )
}
