import Link from "next/link";

export default function Result() {
    return (
        <div className="fn-app">
            <div className="fn-result-title-section">
                <p className="fn-result-title">당신의 관찰력 레벨은</p>
                <p className="fn-result">Lv. 57</p>
                <img src="./assets/images/ai_search.png" className="fn-ai-img"/>
                <p className="fn-ai-answer">
                    ai 주절주절 주절주절 주절주절 주절주절 주절주절 주절주절
                    주절주절 주절주절 주절주절 주절주절 주절주절 주절주절
                    주절주절 주절주절 주절주절 주절주절 주절주절 주절주절
                    주절주절 주절주절 주절주절 주절주절 주절주절 주절주절
                    주절주절 주절주절 주절주절 주절주절 주절주절 주절주절
                    주절주절 주절주절 주절주절 주절주절 주절주절 주절주절
                </p>
                <div className="fn-finish-section">
                    <Link href="/">
                        <button className="fn-next-btn">다시하기</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}