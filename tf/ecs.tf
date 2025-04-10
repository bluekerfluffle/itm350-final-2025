resource "aws_ecs_cluster" "main" {
  name = "main-cluster"
}

resource "aws_ecs_task_definition" "app" {
  family                   = "snake-task"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = "256"
  memory                   = "512"

  container_definitions = jsonencode([
    {
      name      = "snake"
      image     = "<your-dockerhub-username>/snake-game:latest"
      portMappings = [{ containerPort = 80, hostPort = 80 }]
    }
  ])
}

resource "aws_ecs_service" "app" {
  name            = "snake-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.app.arn
  launch_type     = "FARGATE"
  desired_count   = 1

  network_configuration {
    subnets         = aws_subnet.public[*].id
    assign_public_ip = true
    security_groups = [aws_security_group.ecs_sg.id]
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.tg.arn
    container_name   = "snake"
    container_port   = 80
  }

  depends_on = [aws_lb_listener.listener]
}
