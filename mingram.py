from diagrams import Diagram, Cluster
from diagrams.programming.language import Python, Javascript
from diagrams.onprem.iac import Terraform
from diagrams.programming.framework import Nodejs

with Diagram("Development Environment Setup", show=False):
    with Cluster("Setting up the development environment"):
        start = Python("Start")
        nodejs = Nodejs("Download and install Node.js and npm")
        directory = Python("Create a new project directory")
        npm_init = Nodejs("Run npm init")
        end = Python("End")
        start >> nodejs >> directory >> npm_init >> end
