terraform {
  backend "s3" {
    bucket = "oaktheory-terraform-state"
    key    = "vhc/terraform.tfstate"
    region = "us-east-1"

    dynamodb_table = "oaktheory-terraform"
    encrypt        = true
  }
}