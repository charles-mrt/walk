import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    
    render() {

        return(
            <Html>
                <Head>
                    <link rel="shortcut icon" href="./assets/favicon.png"/>                  
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>                    
                    <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
                </Head>

                <body>                    
                    <Main />
                    <NextScript />
                </body>

            </Html>
        )

    }
}