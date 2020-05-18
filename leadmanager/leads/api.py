from .models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# lead viewset


class LeadViewSet(viewsets.ModelViewSet):
    # queryset = Lead.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = LeadSerializer

    def get_queryset(self):  # only display my leads
        return self.request.user.leads.all()

    def perform_create(self, serializer):  # allows us to save the lead owner
        serializer.save(owner=self.request.user)
