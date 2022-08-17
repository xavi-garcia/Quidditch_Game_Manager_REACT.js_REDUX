import {createStore} from "redux";

const initialState = {
    players: [
        {
            id:1,
            name: "Harry Potter",
            thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx_8ujMHII_mhZvPIzOcud_562rF0d1ZnqJg&usqp=CAU"
        },
        {
            id:2,
            name: "Ron Weasley",
            thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKxSfLKjowYE1jPRyLnkuvRc3fbWOghBjXfzkT2EZ1sqUl9jcmlwSmXQ6El8hDf7_gq8&usqp=CAU"
        },
        {
            id:3,
            name: "George Weasley",
            thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrO_3kvU0fAqkcTB7bXTlJ_gjpihERLBcXH3LcrodMDQnbx55g__-B8BSFVuNmQf5kCc&usqp=CAU"
        },
        {
            id:4,
            name: "Fred Weasley",
            thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7U2YeXhWtrTn0n0Yj0Qw7XXGwaKshscvXw&usqp=CAU"
        },
        {
            id:5,
            name: "Draco Malfoy",
            thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2XH8555A86qlim0UAb8T9ReAg32WnJ4ccZwMSEp1MUJDYe3XZezICtKPIn7MW8xeM_g&usqp=CAU"
        },
        {
            id:6,
            name: "Ginny Weasley",
            thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKF-l3qrsSgztoxrFkmy3a9R3glSfvlIg5mf6yE3adcfIatpAQ-OTENP-axDYTFEFnPqk&usqp=CAU"
        },
        {
            id:7,
            name: "Victor Krum",
            thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_lpVH_v2o2cgcDQ77udzSgR9HncOqATxbw&usqp=CAU"
        }
    ],
    beaters: [],
    chasers: [],
    seeker: [],
    keeper:[]

}

const reducerCoach = (state = initialState, action) =>{
    console.log(action)
    return state
}

export default createStore(reducerCoach)