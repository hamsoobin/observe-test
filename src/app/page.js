import Link from "next/link";

export default function Home() {
    return (
        <main className="fn-app">
            <div className="fn-content-section">
                <p className="fn-main-text">어딨지...</p>
                <p className="fn-main-text2">(흐린눈)</p>
                <img src="./assets/images/test_img.png" className="fn-main_img"/>
                <Link href="/clover">
                    <button className="fn-btn">테스트 시작하기</button>
                </Link>
            </div>
        </main>
    );
}
