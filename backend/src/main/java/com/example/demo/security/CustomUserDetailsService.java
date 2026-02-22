package com.example.demo.security;

import java.util.stream.Collectors;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Member;
import com.example.demo.domain.MemberRole;
import com.example.demo.dto.MemberDTO;
import com.example.demo.repository.MemberRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService{
	
	
	private final MemberRepository memberRepository;
	
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
		
		log.info("-----------loaduserByUsername----------------");
		
//		String cleanUsername = username.trim().replace(" ", "");
//	    
//	    log.info("포스트맨에서 온 원본: [" + username + "]");
//	    log.info("공백 제거 후: [" + cleanUsername + "]");
		
		Member member = memberRepository.getWithRole(username);
		
		if(member == null) {
			log.info("해당 이메일을 가진 유저를 db에서 찾을수 없음 : " + username);
			throw new UsernameNotFoundException("Not Found");
		}
		
		MemberDTO memberDTO = new MemberDTO(
				member.getEmail(),
				member.getPw(),
				member.getNickname(),
				member.isSocial(),
				member.getMemberRoleList()
				.stream().map(memberRole -> memberRole.name()).collect(Collectors.toList()));
		
		log.info(memberDTO);
		
		return memberDTO;
	} 
}
