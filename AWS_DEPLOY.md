# Deployment with AWS Amplify (Recommended for Next.js)

AWS Amplify is the easiest way to deploy Next.js applications to AWS. It handles the build settings, hosting, and CD automatically.

## Prerequisites
1.  **GitHub Repository**: Push your code to a GitHub repository if you haven't already.
2.  **AWS Account**: You need an active AWS account.
3.  **Web3Forms Key**: Since we switched to Web3Forms for the contact page, get your Access Key from [Web3Forms](https://web3forms.com/).

## Steps to Deploy

1.  **Log in to AWS Console** and search for **AWS Amplify**.
2.  Click **Create new app**.
3.  Select **GitHub** as the source and click **Next**.
4.  Authorize AWS Amplify to access your GitHub account.
5.  Select your repository (`anti-gravity-porfolio`) and the branch (e.g., `main`).
6.  **Build Settings**:
    *   Amplify should automatically detect it's a Next.js app.
    *   Ensure the build command is `npm run build` or `next build`.
    *   Ensure the output directory is `.next` (Amplify handles this automatically usually).
7.  **Environment Variables**:
    *   Expand the **Advanced settings** section.
    *   Add the following environment variable:
        *   `WEB3FORMS_ACCESS_KEY`: `YOUR_ACCESS_KEY_HERE`
8.  Click **Next**, review the details, and click **Save and deploy**.

Amplify will start building your app. Once done, it will provide a live URL (e.g., `https://main.d12345.amplifyapp.com`).

---

# Alternative: Web3Forms Setup
Since you requested to work without SMTP credentials, we are using **Web3Forms**.

1.  Go to [Web3Forms](https://web3forms.com/) and enter your email to get an Access Key.
2.  Add this key to your `.env.local` for local development:
    ```env
    WEB3FORMS_ACCESS_KEY=your-access-key-here
    ```
3.  Add the same key to AWS Amplify Environment Variables when deploying.
