from django.db import models

class Payment(models.Model):
    id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=50, choices=[('pending', 'Pending'), ('completed', 'Completed')])

    def __str__(self):
        return self.user_name