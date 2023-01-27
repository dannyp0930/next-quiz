import randomPickArr from "@/utils/randomPickArr";
import styles from "./styles.module.css";
import data from "../../data/data.json";
import { useEffect, useRef, useState } from "react";
import { idiom } from "@/types/interface";

export default function Idioms() {
  const [idioms, setIdioms] = useState<idiom[]>([]);
  const [idx, setIdx] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [show, setShow] = useState<boolean>(true);
  const [correct, setCorrect] = useState<boolean>(false);
  const [correctCnt, setCorrectCnt] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const limit = 5;

  useEffect(() => {
    const { length, results } = data.idioms;
    const randomIdxArr = randomPickArr(length, limit);
    setIdioms(randomIdxArr.map((id) => results[id]));
  }, []);

  useEffect(() => {
    if (!show) {
      inputRef.current?.focus();
    }
  }, [show]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setText(e.target.value);
  }

  function handleSumbit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (idx === limit) return;
    if (text === idioms[idx].korean) {
      setCorrectCnt(correctCnt + 1);
      setCorrect(true);
    } else {
      setCorrect(false);
    }
    setText("");
    setShow(true);
    setTimeout(() => {
      setShow(false);
      setIdx(idx + 1);
    }, 1000);
  }

  return (
    <article className={styles.article}>
      {!start ? (
        <section>
          <button
            onClick={() => {
              setStart(true);
              setShow(false);
            }}
          >
            시작
          </button>
        </section>
      ) : (
        <>
          {idx < limit ? (
            <>
              <section className={styles.section}>
                <h2>{idioms[idx]?.meaning}</h2>
                {show && (
                  <>
                    <h1>{correct ? "정답" : "오답"}</h1>
                    <h2>
                      {idioms[idx]?.korean}
                      <span>({idioms[idx]?.chinese})</span>
                    </h2>
                  </>
                )}
              </section>
              {!show && (
                <section>
                  <form onSubmit={handleSumbit}>
                    <input
                      ref={inputRef}
                      className={styles.input}
                      value={text}
                      onChange={handleChange}
                    />
                  </form>
                </section>
              )}
            </>
          ) : (
            <section>
              <h2>맞은 개수: {correctCnt}</h2>
              <p>열심히 하세요~</p>
            </section>
          )}
        </>
      )}
    </article>
  );
}
