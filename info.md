--- debloy this site in firebase

-login firebase
-new project hosting

--in terminal 
  # npm run build
  # npm install -g firebase-tools
  # firebase login
  # firebase init 
  - and type y to contenue
    - selct Hosting: Configure files for Firebase Hosting and
    # and clik spase to true slect
    - select: Use an existing project

    - select name project
      # name folder build
      # Y to my site single page 
      # n to no deploy with githup
      # n no overight

- if your edited in site type this commands in cmd
  # npm run build
  # firebse deploy

- if you want back deploy 
 - open firebse and project in blog-test-af93e release history
 - and click 3 points and click roleback


-- كيفية تغيير الهيد في الرياكت
# npm i react-helmet-async

- in index.js 
  - add helmet async -> import { HelmetProvider } from "react-helmet-async";
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <HelmetProvider>
      <RouterProvider router={router} />
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );

- in pages edit title and description in any file 
-- example
  # import { Helmet } from 'react-helmet-async';
      const Home = () => {
      return (
        <>
          <Helmet>
            <title>React - home</title>
            <meta name="description" content="home" />
          </Helmet>
          <Header />
          {/* name is variable use mainconten.js */}
          <MainContent name="Home Page" designer="Designed By Ahemd Ragep" />

          <Footer />
        </>
      );
    };


-- لجعل الموقع تطبيق يعمل بدون انترنت
  - اولا تنشئ تطبيق جديد بالامر
  # npx create-react-app pwa --template cra-template-pwa
  - ندخل الي التطبيق وناخذ ملفين من مجلد السورس هما 
  service-worker.js و serviceWorkerRegistration.js
  - وننقلهم الي ملف السورس في موقعنا
  - ثم نذهب الي ملف البابليك وناخذ الملف 
  manifest.json , logo129.png, logo512.png
  - نكتب الامريين في ملف index.js
  # import * as serviceWorkerRegistration from './serviceWorkerRegistration';
  # serviceWorkerRegistration.register(); وهذا في الاخر 
  - والان سوف يعمل ولاكن اذا لم يعمل نكتب الاوامر الثالية
  # npm run build
  # npm i -g serve
  # serve -s build

-- موقع رائع لعمل ملف manifest.json
# https://www.simicart.com/manifest-generator.html/