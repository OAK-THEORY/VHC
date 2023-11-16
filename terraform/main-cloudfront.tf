locals {
  s3_origin_id = "vhc-s3-origin"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name              = "${aws_s3_bucket.vhc_s3_bucket.bucket}.s3-website-${var.region}.amazonaws.com"
    origin_id                = local.s3_origin_id

    custom_origin_config {
      http_port                = 80
      https_port               = 443
      origin_protocol_policy   = "http-only"  
      origin_ssl_protocols     = ["TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "VHC Cloudfront distribution"
  default_root_object = "index.html"

  aliases = ["vanderbiltshop.com", "www.vanderbiltshop.com"]

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
    acm_certificate_arn = "arn:aws:acm:us-east-1:601626221892:certificate/695145ac-4a88-431d-bf7b-7d120d220c5c"
    ssl_support_method  = "sni-only"
  }
}

