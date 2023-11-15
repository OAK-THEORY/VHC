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

# resource "aws_s3_bucket_website_configuration" "vhc_s3_bucket_website_configuration" {
#   bucket = aws_s3_bucket.vhc_s3_bucket.id

#   index_document {
#     suffix = "index.html"
#   }

#   error_document {
#     key = "error.html"
#   }

# }