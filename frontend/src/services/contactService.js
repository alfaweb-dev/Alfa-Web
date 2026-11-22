// Swap this with a real endpoint (REST API, email service, CRM webhook, etc.)
export async function sendContactMessage(payload) {
  await new Promise((resolve) => setTimeout(resolve, 900));
  console.info("Contact message submitted:", payload);
  return { success: true };
}
