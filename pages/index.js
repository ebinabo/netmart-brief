import Head from "next/head"
import { Question } from "../components"
import { questions } from "../questions"
import { firestore } from "../firebase"
import { slugify } from "../utils"

export async function getStaticProps() {
    const response = await firestore
        .doc("questionnaire/z7i70X3SNYrVLzpEIRsa")
        .get()

    const data = response.data()

    return {
        props: { data },
    }
}

export default function Home({ data }) {
    return (
        <>
            <Head>
                <title>Netmart Website Brief</title>
            </Head>

            <main className="container max-w-3xl mx-auto px-4 mt-2 text-justify">
                <div className="mt-4">
                    <h1 className="text-4xl text-gray-900 font-semibold">
                        Overview
                    </h1>
                    <p className="text-gray-700">
                        As described in the Business Model for Netmart sent
                        earlier, Netmart is a platform where multi-level
                        marketers or network marketing companies can present
                        their products or services globally and reach millions
                        of like-minded individuals in the multi-level marketing
                        industry.
                    </p>
                </div>

                <div className="mt-4">
                    <h2 className="text-2xl text-gray-900 font-semibold">
                        Goals
                    </h2>
                    <p className="text-gray-700">
                        Netmart is a multisided platform focusing mainly on MLM.
                        Netmart aims to reduce search and transaction costs and
                        to build an audience of like-minded individuals in the
                        industry.
                    </p>
                </div>

                <div className="mt-8">
                    <h1 className="text-4xl text-gray-900 font-semibold">
                        Brief
                    </h1>
                    <p className="text-gray-700">
                        The aim of this document is to further understand the
                        needs and requirements of the platform so as to serve
                        you better and create a tailored platform to serve the
                        users of the platform excellently. The following
                        questions would help our team have a clearer
                        understanding of everything that is required.
                    </p>
                </div>

                {data &&
                    Object.keys(questions).map(category => (
                        <div className="mt-4" key={category}>
                            <h2 className="text-2xl text-gray-900 font-semibold mb-2">
                                {category}
                            </h2>
                            <div className="grid gap-4">
                                {questions[category].map((question, index) => (
                                    <Question
                                        id={index + 1}
                                        key={index}
                                        category={category}
                                        response={
                                            data[
                                                slugify(
                                                    `${category}-${index + 1}`
                                                )
                                            ]
                                        }
                                        {...question}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
            </main>
        </>
    )
}
