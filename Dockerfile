FROM openjdk:8u171-jre-slim
WORKDIR /home
COPY . /home
ADD https://dl.bintray.com/getsandbox/public/com/sandbox/sandbox/1.0.231/sandbox-1.0.231-all.jar sandbox.jar
ENV LANG C.UTF-8
EXPOSE 80/tcp
CMD java -XX:+UseG1GC -XX:+UseStringDeduplication ${JAVA_OPTS:--Xmx128m -Xmx128m} -jar sandbox.jar --port=${PORT:-80} --watch=false $JAVA_PARAMS run