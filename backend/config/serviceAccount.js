

const serviceAccount = {
  type: "service_account",
  project_id: "blipquiz",
  private_key_id: process.env.SERVICE_ACCOUNT_KEY_ID,
  private_key: process.env.SERVICE_ACCOUNT_KEY,
  client_email: "firebase-adminsdk-kcael@blipquiz.iam.gserviceaccount.com",
  client_id: "117606283816867318878",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-kcael%40blipquiz.iam.gserviceaccount.com"
}

const JSON_serviceAccount = JSON.stringify(serviceAccount);

module.exports = JSON_serviceAccount;