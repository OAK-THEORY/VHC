terraform {
  required_version = ">= 1.0.0, < 2.0.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = var.region
  default_tags {
    tags = {
      ManagedBy = "Terraform"
    }
  }
}

resource "aws_s3_bucket" "vhc_s3_bucket" {
  bucket = "vhc-s3-bucket"

  tags = {
    Name        = "vhc-s3-bucket"
    Environment = "RROD"
  }
}

resource "aws_s3_bucket_website_configuration" "vhc_s3_bucket_website_configuration" {
  bucket = aws_s3_bucket.vhc_s3_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }

}


resource "aws_s3_bucket_public_access_block" "vhc_s3_public_access_block" {
  bucket = aws_s3_bucket.vhc_s3_bucket.id

  block_public_acls   = false
  block_public_policy = false
  ignore_public_acls  = false
  restrict_public_buckets = false
}


# S3 Bucket Policy
resource "aws_s3_bucket_policy" "allow_public_access" {
  bucket = aws_s3_bucket.vhc_s3_bucket.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action    = "s3:GetObject",
        Effect    = "Allow",
        Resource  = "arn:aws:s3:::${aws_s3_bucket.vhc_s3_bucket.bucket}/*",
        Principal = "*"
      },
    ],
  })
}