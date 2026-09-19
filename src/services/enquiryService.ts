import { QuoteRequest, DistributorRequest, CareerRequest } from '@/types';
import { company } from '@/data/company';

export async function submitQuoteRequest(data: QuoteRequest): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Mock API: Quote request dispatched to ${company.email} (sales@patelequipment.com):`, data);
  return {
    success: true,
    message: `Thank you, ${data.name}. Your quote request for ${data.product || 'the specified equipment'} has been received successfully. Our sales team (${company.email}) will get back to you shortly.`
  };
}

export async function submitDistributorRequest(data: DistributorRequest): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Mock API: Distributor request dispatched to ${company.email} (sales@patelequipment.com):`, data);
  return {
    success: true,
    message: `Thank you, ${data.name}. Your B2B distributor enquiry for ${data.companyName} has been received. Our sales team (${company.email}) will review your details and contact you.`
  };
}

export async function submitCareerRequest(data: CareerRequest): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Mock API: Career application dispatched to ${company.email} (sales@patelequipment.com):`, data);
  return {
    success: true,
    message: `Thank you, ${data.name}. Your application for ${data.position || 'general opening'} has been received. Our recruitment team (${company.email}) will review your profile.`
  };
}
