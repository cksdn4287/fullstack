package com.example.demo.service;

import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.MemberDTO;

@Transactional
public interface MemberService {

	
	MemberDTO getKakaoMember(String accessToken);
}
