package com.jdc.crazycolor.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.crazycolor.entity.Dress;
import com.jdc.crazycolor.model.BaseApi;
import com.jdc.crazycolor.model.BaseService;
import com.jdc.crazycolor.service.DressService;

@RestController
@RequestMapping("dress")
public class DressApi extends BaseApi<Dress, Integer>{

	@Autowired
	private DressService service;
	
	@Override
	protected BaseService<Dress, Integer> service() {
		return service;
	}

}
