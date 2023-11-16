resource "aws_route53_record" "alias_record" {
  zone_id = "Z0234196PUYV6WC2HAAI"
  name    = "vanderbiltshop.com"
  type    = "A"  # Use 'A' type for an Alias record

  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_alias_record" {
  zone_id = "Z0234196PUYV6WC2HAAI"
  name    = "www.vanderbiltshop.com"
  type    = "A"  # Use 'A' type for an Alias record

  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

