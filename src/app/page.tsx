import { queryDatabase } from "@/services/notion";

export default async function Home() {
  const data = await queryDatabase('ac9cc4568b7440ff85028d84e6f250a3')
  console.log(data)
  return (
    <main>
      <div>Notion Key {process.env.NOTION_KEY}</div>
    </main>
  );
}
