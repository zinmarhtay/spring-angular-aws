package com.jdc.crazycolor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jdc.crazycolor.entity.Dress;
import com.jdc.crazycolor.model.BaseRepo;
import com.jdc.crazycolor.model.BaseService;
import com.jdc.crazycolor.repo.DressRepo;

@Service
public class DressService extends BaseService<Dress, Integer>{

	@Autowired
	private DressRepo repo;
	
	@Override
	protected BaseRepo<Dress, Integer> repo() {
		return repo;
	}
	
}
