import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Wifi, Zap, Shield, Users, CheckCircle2, CreditCard, Bitcoin } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';

interface PlanDetails {
  name: string;
  speed: string;
  price: string;
  features: string[];
}

const defaultPlan: PlanDetails = {
  name: 'Lightning 1GB',
  speed: '1 Gigabit',
  price: '$99',
  features: [
    'Unlimited data',
    'Free installation',
    'Priority support',
    '99.9% uptime guarantee',
  ],
};

export const InternetPurchasePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const plan: PlanDetails = location.state?.plan || defaultPlan;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'card',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Purchase data:', { plan, ...formData });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center px-4 py-12">
        <Card className="max-w-2xl w-full text-center p-8 sm:p-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Order Confirmed!</h1>
          <p className="text-lg text-neutral-600 mb-6">
            Thank you for choosing {plan.name}. Your order has been received and is being processed.
          </p>
          <div className="bg-neutral-50 rounded-lg p-6 mb-6 text-left">
            <h3 className="font-semibold text-neutral-900 mb-3">What Happens Next:</h3>
            <ol className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="font-semibold">1.</span>
                <span>You'll receive a confirmation email within 5 minutes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">2.</span>
                <span>Our team will contact you to schedule installation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">3.</span>
                <span>Professional installation within 24-48 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold">4.</span>
                <span>Start enjoying your lightning-fast internet!</span>
              </li>
            </ol>
          </div>
          <Link to="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-primary-600 hover:text-primary-700 mb-6 flex items-center gap-2"
        >
          ← Back
        </button>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Card className="p-8 mb-6 sticky top-24">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Your Selected Plan</h2>
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-6 text-white mb-6">
                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold mb-4">{plan.price}<span className="text-xl font-normal">/month</span></p>
                <div className="flex items-center gap-2 text-white/90">
                  <Zap className="w-5 h-5" />
                  <span className="text-lg">{plan.speed} Speed</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-200 pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-neutral-600">Monthly Fee</span>
                  <span className="font-semibold">{plan.price}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-neutral-600">Installation</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-neutral-200">
                  <span className="text-lg font-bold">Total Due Today</span>
                  <span className="text-2xl font-bold text-primary-600">{plan.price}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900">Secure Payment</p>
                    <p className="text-xs text-blue-700">Your information is protected with enterprise-grade encryption</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Complete Your Order</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <Input
                      label="Full Name"
                      type="text"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Installation Address</h3>
                  <div className="space-y-4">
                    <Input
                      label="Street Address"
                      type="text"
                      placeholder="123 Main St"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="City"
                        type="text"
                        placeholder="New York"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                      <Input
                        label="ZIP Code"
                        type="text"
                        placeholder="10001"
                        required
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Payment Method</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border-2 border-neutral-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="w-4 h-4 text-primary-600"
                      />
                      <CreditCard className="w-5 h-5 text-neutral-600" />
                      <div className="flex-1">
                        <span className="font-medium text-neutral-900">Credit/Debit Card</span>
                        <p className="text-sm text-neutral-500">Visa, Mastercard, Amex</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-4 border-2 border-neutral-200 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="crypto"
                        checked={formData.paymentMethod === 'crypto'}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="w-4 h-4 text-primary-600"
                      />
                      <Bitcoin className="w-5 h-5 text-neutral-600" />
                      <div className="flex-1">
                        <span className="font-medium text-neutral-900">Cryptocurrency</span>
                        <p className="text-sm text-neutral-500">Bitcoin, Ethereum, USDT</p>
                      </div>
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full hover:shadow-glow-primary transition-all duration-300 animate-pulse-glow"
                >
                  Complete Purchase
                </Button>

                <p className="text-xs text-center text-neutral-500">
                  By completing this purchase, you agree to our Terms of Service and Privacy Policy.
                  No commitment required - cancel anytime.
                </p>
              </form>
            </Card>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <Card className="p-4 text-center hover:shadow-hover transition-all duration-300">
                <Zap className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-neutral-900">Fast Setup</p>
                <p className="text-xs text-neutral-600">24-48 hours</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-hover transition-all duration-300">
                <Shield className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-neutral-900">Secure</p>
                <p className="text-xs text-neutral-600">256-bit SSL</p>
              </Card>
              <Card className="p-4 text-center hover:shadow-hover transition-all duration-300">
                <Users className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-neutral-900">24/7 Support</p>
                <p className="text-xs text-neutral-600">Always here</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
