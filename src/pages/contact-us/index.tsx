import {
  AlertTriangleIcon,
  CheckCircle2Icon,
  LightbulbIcon,
  MailIcon,
  MessageSquareIcon,
  SendIcon,
  UserIcon,
} from 'lucide-react';
import React, { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  category: 'concern' | 'idea' | 'bug' | 'volunteer' | 'other';
  message: string;
};

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    category: 'concern',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission (replace with actual API call)
    try {
      // TODO: Replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'concern',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-6 md:py-8'>
        <div className='max-w-5xl mx-auto'>
          {/* Header */}
          <div className='bg-white rounded-lg border shadow-xs p-6 md:p-8 mb-6'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Contact Us
            </h1>
            <p className='text-lg text-gray-600'>
              We&apos;d love to hear from you! Whether you have a concern, an
              idea to improve our platform, want to report a bug, or are
              interested in volunteering, please use the form below to get in
              touch.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {/* Contact Form */}
            <div className='md:col-span-2'>
              <div className='bg-white rounded-lg border shadow-xs p-6 md:p-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} className='space-y-6'>
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Your Name <span className='text-red-500'>*</span>
                    </label>
                    <div className='relative'>
                      <UserIcon className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        placeholder='Juan Dela Cruz'
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Email Address <span className='text-red-500'>*</span>
                    </label>
                    <div className='relative'>
                      <MailIcon className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        placeholder='juan@example.com'
                      />
                    </div>
                  </div>

                  {/* Category Field */}
                  <div>
                    <label
                      htmlFor='category'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Category <span className='text-red-500'>*</span>
                    </label>
                    <select
                      id='category'
                      name='category'
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    >
                      <option value='concern'>General Concern</option>
                      <option value='idea'>Suggestion/Idea</option>
                      <option value='bug'>Bug Report</option>
                      <option value='volunteer'>Volunteer Inquiry</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor='subject'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Subject <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='text'
                      id='subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Brief description of your message'
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Message <span className='text-red-500'>*</span>
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Please provide as much detail as possible...'
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center'
                  >
                    {isSubmitting ? (
                      <>
                        <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2' />
                        Sending...
                      </>
                    ) : (
                      <>
                        <SendIcon className='h-5 w-5 mr-2' />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className='bg-green-50 border border-green-200 rounded-lg p-4 flex items-start'>
                      <CheckCircle2Icon className='h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5' />
                      <div>
                        <h3 className='font-medium text-green-900'>
                          Message sent successfully!
                        </h3>
                        <p className='text-sm text-green-700 mt-1'>
                          Thank you for contacting us. We&apos;ll get back to
                          you as soon as possible.
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className='bg-red-50 border border-red-200 rounded-lg p-4 flex items-start'>
                      <AlertTriangleIcon className='h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5' />
                      <div>
                        <h3 className='font-medium text-red-900'>
                          Something went wrong
                        </h3>
                        <p className='text-sm text-red-700 mt-1'>
                          Please try again or contact us directly at{' '}
                          <a
                            href='mailto:hello@bettergov.ph'
                            className='underline hover:text-red-800'
                          >
                            hello@bettergov.ph
                          </a>
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className='space-y-6'>
              {/* Quick Contact */}
              <div className='bg-white rounded-lg border shadow-xs p-6'>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>
                  Quick Contact
                </h3>
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <MailIcon className='h-5 w-5 text-blue-600 mr-3 mt-0.5' />
                    <div>
                      <p className='text-sm font-medium text-gray-700'>
                        General Inquiries
                      </p>
                      <a
                        href='mailto:hello@bettergov.ph'
                        className='text-sm text-blue-600 hover:text-blue-800'
                      >
                        hello@bettergov.ph
                      </a>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <AlertTriangleIcon className='h-5 w-5 text-amber-600 mr-3 mt-0.5' />
                    <div>
                      <p className='text-sm font-medium text-gray-700'>
                        Bug Reports
                      </p>
                      <a
                        href='mailto:bugs@bettergov.ph'
                        className='text-sm text-blue-600 hover:text-blue-800'
                      >
                        bugs@bettergov.ph
                      </a>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <UserIcon className='h-5 w-5 text-green-600 mr-3 mt-0.5' />
                    <div>
                      <p className='text-sm font-medium text-gray-700'>
                        Volunteer
                      </p>
                      <a
                        href='mailto:volunteers@bettergov.ph'
                        className='text-sm text-blue-600 hover:text-blue-800'
                      >
                        volunteers@bettergov.ph
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categories Info */}
              <div className='bg-blue-50 rounded-lg border border-blue-100 p-6'>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>
                  What to include
                </h3>
                <div className='space-y-3 text-sm text-gray-700'>
                  <div className='flex items-start'>
                    <MessageSquareIcon className='h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0' />
                    <p>
                      <strong>Concerns:</strong> Issues with services or content
                    </p>
                  </div>
                  <div className='flex items-start'>
                    <LightbulbIcon className='h-4 w-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0' />
                    <p>
                      <strong>Ideas:</strong> Suggestions for improvements or
                      new features
                    </p>
                  </div>
                  <div className='flex items-start'>
                    <AlertTriangleIcon className='h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0' />
                    <p>
                      <strong>Bugs:</strong> Include steps to reproduce,
                      browser/device info
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className='bg-gray-50 rounded-lg border border-gray-200 p-6'>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  Response Time
                </h3>
                <p className='text-sm text-gray-600'>
                  We typically respond within 2-3 business days. For urgent
                  matters, please email us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
