output "website_domain" {
  value = aws_s3_bucket.vhc_s3_bucket.website_domain
  
}

output "website_endpoint" {
  value = aws_s3_bucket.vhc_s3_bucket.website_endpoint
  
}