import Seo from "@/components/Seo";
import randomPickArr from "@/utils/randomPickArr";
import data from "../data/data.json";

export default function Page() {
  const { length, results } = data.idioms;
  const randomIdxArr = randomPickArr(length, 20)
  const randomResults = randomIdxArr.map(id => results[id])
  return (
    <div>
      <Seo title="사자성어" />
      <h1>사자성어</h1>
    </div>
  );
}
