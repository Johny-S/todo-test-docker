FROM openjdk:8-jdk-alpine

LABEL maintainer="9364016@gmail.com"

VOLUME /tmp

EXPOSE 8080

ARG JAR_FILE=out/artifacts/todolist_jar/todolist.jar

ADD ${JAR_FILE} todolist-backend.jar

# ENTRYPOINT ["java","-jar","/todolist-backend.jar"]