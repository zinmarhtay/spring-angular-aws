package com.jdc.crazycolor;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.jdc.crazycolor.model.BaseRepoImp;

@Configuration
@EnableJpaRepositories(
		repositoryBaseClass = BaseRepoImp.class
		)

public class RepositoryConfig {

}
