terraform {
  required_providers {
    linode = {
      source = "linode/linode"
    }
  }
}

provider "linode" {
  token = var.linode_api_token
}

resource "linode_sshkey" "ubuntu_rsa" {
  label = "ubuntu_rsa"
  ssh_key = chomp(file("~/.ssh/ubuntu_rsa.pub"))
}

resource "linode_instance" "terraform-web" {
        image = "linode/ubuntu22.04"
        label = "rcarroll.dev"
        region = "us-east"
        type = "g6-nanode-1"
        authorized_keys = [linode_sshkey.ubuntu_rsa.ssh_key]
}

output "linode_ip" {
  value = linode_instance.terraform-web.ip_address
}

