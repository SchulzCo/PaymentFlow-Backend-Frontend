from django.test import TestCase
from .models import Payment

class PaymentModelTest(TestCase):
    def test_payment_creation(self):
        payment = Payment.objects.create(
            user_name='John Doe',
            amount=100.00,
            status='pending'
        )
        self.assertEqual(payment.user_name, 'John Doe')