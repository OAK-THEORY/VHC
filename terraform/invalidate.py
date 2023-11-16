import boto3
import os

# Initialize a CloudFront client
client = boto3.client('cloudfront')
distribution_id = 'E3X1BT5KLCZ5A'

# Invalidate everything
paths_to_invalidate = ['/*']

# Generate a unique CallerReference using GitHub environment variables
caller_reference = f"github-action-{os.getenv('GITHUB_RUN_ID')}"

# Create the invalidation
invalidation = client.create_invalidation(
    DistributionId=distribution_id,
    InvalidationBatch={
        'Paths': {
            'Quantity': len(paths_to_invalidate),
            'Items': paths_to_invalidate
        },
        'CallerReference': caller_reference
    }
)

print(invalidation)
