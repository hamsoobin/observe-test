import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    clover: [
        { imgUrl: "./assets/images/triple.png", name: '세잎 클로버' },
        { imgUrl: "./assets/images/lucky.png", name: '네잎 클로버' },
    ],
    mixClovers: [],
}

const cloverSlice = createSlice({
    name: 'clover',
    initialState,
    reducers: {
        resetClover: (state) => state.mixClovers = [],
        mixedCLover: (state) => {
            const lucky = Math.floor(Math.random() * 90);
            for (let i = 0; i < 91; i++) {
                // i가 lucky번 째 라면 네잎 클로버를 그리고 그 다음부터 끝까지 세잎클로버를 그린다
                if (i === lucky) {

                }
            }
        }
    }
})

export default cloverSlice.reducer