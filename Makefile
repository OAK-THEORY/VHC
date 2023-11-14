.PHONY: bootstrap

bootstrap:
	cd terraform && touch main.tf variables.tf backend.tf outputs.tf
init:
	cd terraform && terraform init

test:
	cd terraform && terraform fmt
	cd terraform && terraform validate
	cd terraform && terraform plan

build:
	cd terraform && terraform apply --auto-approve

destroy:
	cd terraform && terraform destroy --auto-approve