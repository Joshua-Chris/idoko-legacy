import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

// Must be an address on your verified domain, e.g. "quotes@idokolegacy.com"
export const FROM_EMAIL = "Idoko Legacy <notifications@idokolegacy.com>";

// Where you want to receive the form submissions
export const NOTIFY_EMAIL = "info@idokolegacy.com";
