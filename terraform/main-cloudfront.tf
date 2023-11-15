locals {
  s3_origin_id = "vhc-s3-origin"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    # domain_name              = "${aws_s3_bucket.vhc_s3_bucket.bucket}.s3-website-${var.region}.amazonaws.com"
    domain_name = "vhc-s3-bucket.s3-website-us-east-1.amazonaws.com"
    origin_id                = local.s3_origin_id

    # s3_origin_config {
    #   origin_access_identity = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
    # }
  }

  

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "VHC Cloudfront distribution"
  default_root_object = "index.html"


#   aliases = ["mysite.example.com", "yoursite.example.com"]

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_200"

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["US", "CA", "GB", "DE", "PL"]
    }
  }

  tags = {
    Environment = "PROD"
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

# # CloudFront Origin Access Identity
# resource "aws_cloudfront_origin_access_identity" "oai" {
#   comment = "OAI for accessing private S3 content"
# }


