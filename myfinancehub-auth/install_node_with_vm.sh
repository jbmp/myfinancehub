#!/bin/bash

# Specify the desired Node.js version
desired_node_version="18.17.0"

# Function to add NVM initialization to shell profile
add_nvm_to_profile() {
    local profile="$1"
    if [ -f "$profile" ]; then
        if ! grep -q "source ~/.nvm/nvm.sh" "$profile"; then
            echo "Adding NVM initialization to $profile..."
            echo 'export NVM_DIR="$HOME/.nvm"' >> "$profile"
            echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> "$profile"
            echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> "$profile"
        fi
    fi
}

# Check if NVM is installed
if ! command -v nvm &> /dev/null; then
    echo "NVM is not installed. Installing NVM..."
    # Install NVM
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
fi

# Add NVM initialization to ~/.zshrc and ~/.bash_profile
add_nvm_to_profile ~/.zshrc
add_nvm_to_profile ~/.bash_profile

# Reload the shell to apply changes
source ~/.zshrc
source ~/.bash_profile

# Check if the desired Node.js version is already installed
if nvm ls | grep -q "$desired_node_version"; then
    echo "Node.js $desired_node_version is already installed."
else
    echo "Installing Node.js $desired_node_version..."
    # Install the desired version of Node.js
    nvm install "$desired_node_version"
fi

# Use the desired Node.js version
nvm use "$desired_node_version"

# Verify the installation
node -v
npm -v