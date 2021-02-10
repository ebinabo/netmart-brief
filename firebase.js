import firebase from "firebase/app"
import "firebase/firestore"

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyA_VykqrCsjeXaHG656Xqdi_OUl8xk8aVQ",
        projectId: "netmart-brief",
        appId: "1:457425458085:web:19438342b23b6889298e4c",
    })
}

export const firestore = firebase.firestore()
