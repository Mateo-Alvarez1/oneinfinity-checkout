import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(
      `${process.env.ONE_API_BASE_PROD}/v1/checkout_preferences`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.ONE_API_KEY as string,
          "x-api-secret": process.env.ONE_SECRET_KEY as string,
        },
        body: JSON.stringify({
          amount: body.amount || 85807.04,
          currency: body.currency || "ARS",
          country_id: "ARG",
          type: "PAYMENT",
          title: body.title || "Suscripción Premium",
          external_id:
            body.external_id || "order_{}".replace("{}", Date.now().toString()),
          payer: {
            email: body.email,
            first_name: body.first_name,
            last_name: body.last_name,
            phone_number: body.phone_number,
          },
          custom_urls: {
            // redirigir a tu ruta especifica
            success_payment_redirect: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,

            // redirigir a tu ruta especifica
            error_payment_redirect: `${process.env.NEXT_PUBLIC_BASE_URL}/error`,

            // redirigir a tu ruta especifica
            status_changes_webhook: `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhook`,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
