import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>WhiteCube - Barber Augustów</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charSet="UTF-8"/>
                <meta name="language" content="pl"/>
                <meta name="robots" content="index, nofollow"/>
                <meta name="description"
                      content="WhiteCube - Barber Augustów to miejsce, gdzie tradycja spotyka nowoczesność. Nasz salon fryzjerski w Augustowie oferuje profesjonalne usługi barberingowe. Doświadczeni fryzjerzy zapewnią Ci doskonałą fryzurę, ścinając włosy z pasją i precyzją. Odwiedź nas, aby poczuć się pewnie i stylowo!"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
